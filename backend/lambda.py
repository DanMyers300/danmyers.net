import json
import boto3
import os

ec2 = boto3.client('ec2')

def get_instance_id():
    return os.environ['INSTANCE_ID']

def check_instance_exists(instance_id):
    try:
        ec2.describe_instances(InstanceIds=[instance_id])
        return True
    except ec2.exceptions.ClientError as e:
        if e.response['Error']['Code'] == 'InvalidInstanceID.NotFound':
            return False
        else:
            raise

def get_instance_status(instance_id):
    response = ec2.describe_instances(InstanceIds=[instance_id])
    return response['Reservations'][0]['Instances'][0]['State']['Name']

def lambda_handler(event, context):
    print("Received Lambda request:", event)

    instance_id = get_instance_id()
    action = event.get('action')

    if not action:
        return {
            'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Origin': '*',  # Replace * with the allowed origin or your website's domain
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
            },
            'body': json.dumps({'status': '', 'message': "Bad Request: Action not provided. Use 'action': 'start', 'stop', or 'checkServer'."})
        }

    if not check_instance_exists(instance_id):
        return {
            'statusCode': 404,
            'headers': {
                'Access-Control-Allow-Origin': '*',  # Replace * with the allowed origin or your website's domain
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
            },
            'body': json.dumps({'status': '', 'message': "Instance ID not found."})
        }

    try:
        if action == 'start':
            ec2.start_instances(InstanceIds=[instance_id])
        elif action == 'stop':
            ec2.stop_instances(InstanceIds=[instance_id])
        elif action == 'checkServer':
            current_status = get_instance_status(instance_id)
            print("Current EC2 instance status:", current_status)
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Origin': '*',  # Replace * with the allowed origin or your website's domain
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'POST',
                },
                'body': json.dumps({'status': current_status, 'message': f"Server is {current_status}."})
            }
        else:
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*',  # Replace * with the allowed origin or your website's domain
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'POST',
                },
                'body': json.dumps({'status': '', 'message': "Bad Request: Invalid action. Use 'action': 'start', 'stop', or 'checkServer'."})
            }

        current_status = get_instance_status(instance_id)
        print("Current EC2 instance status:", current_status)

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',  # Replace * with the allowed origin or your website's domain
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
            },
            'body': json.dumps({'status': current_status, 'message': f"Server {action} request successful."})
        }

    except Exception as e:
        print('Error toggling EC2 instance:', e)
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',  # Replace * with the allowed origin or your website's domain
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
            },
            'body': json.dumps({'status': action, 'message': "Internal Server Error."})
        }

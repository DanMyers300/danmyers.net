{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, ... }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-darwin" "x86_64-darwin" ];
      forAllSystems = f: nixpkgs.lib.genAttrs supportedSystems (system:
        f {
          pkgs = import nixpkgs { inherit system; };
          system = system;
        }
      );
      buildInputsFor = pkgs: with pkgs; with python312Packages; [
        nodejs_23
        bun
        tailwindcss
        python312
        pip
        llama-index
        llama-index-llms-ollama
        llama-index-embeddings-ollama
        llama-index-vector-stores-chroma
        datasets
        python-dotenv
        transformers
        torchvision
        accelerate
        fastapi
        uvicorn
        chromadb
        zstd
      ];
    in {
      devShells = forAllSystems ({ pkgs, system }: {
        default = pkgs.mkShell {
          name = "danmyers.net";
          buildInputs = buildInputsFor pkgs;
          LD_LIBRARY_PATH = pkgs.lib.optionalString pkgs.stdenv.isLinux
            (pkgs.lib.makeLibraryPath [ pkgs.zstd ]);
          shellHook = ''
            export NLTK_DATA="$PWD/nltk_data"
            export TIKTOKEN_CACHE_DIR="$PWD/tiktoken_cache"
            mkdir -p "$TIKTOKEN_CACHE_DIR"
            python3 -m nltk.downloader punkt_tab
            ./start_stream.sh
          '';
        };
      });
    };
}


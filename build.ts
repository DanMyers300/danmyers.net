async function build (){
  await Bun.build({
    entrypoints: ['./index.html'],
    outdir: './out',
  })
};
build();

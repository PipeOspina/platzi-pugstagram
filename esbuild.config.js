import esbuildSvelte from 'esbuild-svelte';
import sveltePreprocess from 'svelte-preprocess';
import esbuildServe from 'esbuild-serve';
import dotenv from 'dotenv';

const { env } = process;
const nodeEnv = env.NODE_ENV || 'development';
const path = `./.env.${nodeEnv}.local`;

dotenv.config({ path })

let define = {};
Object.entries(env).forEach((entry) => {
    const [key, value] = entry;
    define[`process.env.${key}`] = `'${value}'`;
});

console.log(env.NODE_EVN);

esbuildServe({
    entryPoints: ['./src/app.ts'],
    bundle: true,
    minify: nodeEnv === 'production',
    sourcemap: true,
    plugins: [
        esbuildSvelte({
            preprocess: sveltePreprocess(),
            compileOptions: {
                dev: nodeEnv === 'development',
                sourcemap: true,
                preserveComments: false,
            },
        }),
    ],
    outfile: './public/bundle.js',
    /* watch: {
        onRebuild(error) {
            if (error) console.log('Watch build failed:', error)
            else console.log('Rebuild succeeded')
        },
    }, */
    define,
}, {
    port: 8080,
    root: './public',
    live: true,
});

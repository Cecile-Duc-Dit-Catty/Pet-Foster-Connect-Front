// autocomplétion des classes CSS dans TypeScript
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

export default (input: string) => fetch(input).then(res => res.json());
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    const s: BinaryNode<number>[] = [head];

    while (s.length) {
        const curr = s.pop() as BinaryNode<number>;
        if (curr.value === needle) {
            return true;
        }
        if (curr.right) {
            s.push(curr.right);
        }
        if (curr.left) {
            s.push(curr.left);
        }
    }
    return false;
}
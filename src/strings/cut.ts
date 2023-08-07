export const cut = (value: string, sep = '\n'): [string, string] => {
    const pos = value.indexOf(sep);
    if (!pos) {
        return [value, ''];
    }
    return [
        value.slice(0, pos),
        value.slice(pos + 1),
    ];
}
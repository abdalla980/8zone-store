export function getUserId(): string {
    let id = localStorage.getItem('userId');
    if (!id) {
        id = Math.random().toString(36).substring(2, 10);
        localStorage.setItem('userId', id);
    }
    return id;
}

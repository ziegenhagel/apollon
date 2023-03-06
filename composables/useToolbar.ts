export const useToolbar = () => {
    return useState('toolbar', () => ({
        objectFit: 'cover',
        columns: 5
    }))
}

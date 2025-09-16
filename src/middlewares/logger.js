export const logger = (req, res, next) => {
    // mostrar data com time zone de sao paulo
    console.log(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`)
    next()
}

export default logger
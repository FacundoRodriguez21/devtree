import colors from 'colors'
import server from './server'

const port = process.env.PORT || 4000

server.listen(4000, () => {
    console.log(colors.bgBlue.magenta.italic('Servidor funcionando en el: '), port)
})


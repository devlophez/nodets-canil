// EXPRESS SERVER
import express from 'express'

// Configurar Variáveis de Ambiente
import dotenv from 'dotenv'

// Template Engine
import mustache from 'mustache-express'

// Configurar Pasta Estática/Pública
import path from 'path'

// Import da index.ts, em routes
import mainRoutes from './routes/index'

// não esquecer de criar o arquivo .env
dotenv.config() 

const server = express()

/** Configuração do Template Engine */
server.set('view engine', 'mustache')
// não esquecer de criar a pasta 'views' dentro da 'src'
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

/**  Configuração de  Pasta Pública 
 * 
 *      CRIAR pasta 'public' na raiz do projeto
*/
server.use(express.static(path.join(__dirname, '../public')))

/**     Configuração de Rotas */
server.use(mainRoutes)


server.use((req, res) =>{

    res.render('pages/404')
})

/**     Configuração de porta do servidor */
server.listen(process.env.PORT)
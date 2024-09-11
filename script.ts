import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//CRUD
//Buscar todos os clientes
async function buscartodosClientes() {
    const clientes = await prisma.cliente.findMany();
    return clientes;
}

buscartodosClientes().then(clientes => {
    console.log(clientes)
  }).catch(e => {
    console.error(e)
  }).finally(async () => {
    await prisma.$disconnect()
  })


//Buscar todos os estabelecimentos
async function buscartodosEstabelecimentos() {
    const estabelecimentos = await prisma.estabelecimento.findMany();
    return estabelecimentos;
}

buscartodosEstabelecimentos().then(estabelecimentos => {
    console.log(estabelecimentos)
  }).catch(e => {
    console.error(e)
  }).finally(async () => {
    await prisma.$disconnect()
  })

//Buscar todos os pedidos no sistema
async function buscartodosPedidos() {
    const pedidos = await prisma.pedido.findMany();
    return pedidos;
}

buscartodosPedidos().then(pedidos => {
    console.log(pedidos)
  }).catch(e => {
    console.error(e)
  }).finally(async () => {
    await prisma.$disconnect()
  })

//Buscar todos os itens por estabelecimento
//Buscar item por pedido
//Buscar cliente por pedido
//Buscar todos os pedidos do estabelecimento

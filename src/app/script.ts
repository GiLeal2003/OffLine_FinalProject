import { PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'

const prisma = new PrismaClient()
//CRTL + ESPAÇO -> mostra as opções de comando que é possível de se codar
//CRUD -> Funções

//READ
//Buscar todos os clientes com pedido, dado o valor do estabelecimento como parâmetro
async function buscarClientesPorEstabelecimento(cod_loja: number) {
  const clientesEstabelecimento = await prisma.pedido.findMany({
    where: {
      cod_loja: cod_loja,
    },
    select: {
      Cliente: true, 
    }
  })

  return clientesEstabelecimento.map(pedido => pedido.Cliente)
}

//Chamada1
async function chamada1(cod_loja: number) {
  const clienteEstabelecimento = await buscarClientesPorEstabelecimento(cod_loja)
  
  if (clienteEstabelecimento.length > 0) {
    console.log(clienteEstabelecimento)
  } else {
    console.log(`Nenhum cliente encontrado no estabelecimento`)
  }
}

//Buscar todos os pedidos no sistema por estabelecimento
async function buscartodosPedidos(cod_loja: number) {
    const pedidosEstabelecimento = await prisma.pedido.findMany({
      where: {
        cod_loja: cod_loja,
      },
      select: {
        Estabelecimento: true, 
      }
    });
    return pedidosEstabelecimento;
}

//Chamada2
async function chamada2(cod_loja: number) {
  const pedidoEstabelecimento = await buscartodosPedidos(cod_loja)
  
  if (pedidoEstabelecimento.length > 0) {
    console.log(pedidoEstabelecimento)
  } else {
    console.log(`Nenhum pedido encontrado no estabelecimento`)
  }
}

//Buscar todos os itens por estabelecimento
async function buscartodosItens(cod_loja: number) {
  const itensEstabelecimento = await prisma.item.findMany({
    where: {
      cod_loja: cod_loja,
    },
    select: {
      Estabelecimento: true, 
    }
  });
  return itensEstabelecimento;
}

//Chamada3
async function chamada3(cod_loja: number) {
  const itemEstabelecimento = await buscartodosItens(cod_loja)
  
  if (itemEstabelecimento.length > 0) {
    console.log(itemEstabelecimento)
  } else {
    console.log(`Nenhum item encontrado no cardápio`)
  }
}

//Buscar itens no pedido por estabelecimento
async function buscarItemPedido(cod_loja: number, cod_ped: number) {
  const itensPedidoEstabelecimento = await prisma.item_Pedido.findMany({
    where: {
      cod_loja: cod_loja,
      cod_ped: cod_ped,
    },
    select: {
      Estabelecimento: true,
      Pedido: true,
      Item: true, 
    }
  });
  return itensPedidoEstabelecimento;
}

//Chamada4
async function chamada4(cod_loja: number, cod_ped: number) {
  const itemPedidoEstabelecimento = await buscarItemPedido(cod_loja, cod_ped)
  
  if (itemPedidoEstabelecimento.length > 0) {
    console.log(itemPedidoEstabelecimento)
  } else {
    console.log(`Nenhum item encontrado no pedido`)
  }
}

//Buscar cliente por pedido
async function buscarPedidoCliente(cod_loja: number, cod_cli: number) {
  const pedidosClienteEstabelecimento = await prisma.pedido.findMany({
    where: {
      cod_loja: cod_loja,
      cod_cli: cod_cli,
    },
    select: {
      Estabelecimento: true,
      Cliente: true,
    }
  });
  return pedidosClienteEstabelecimento;
}

//Chamada5
async function chamada5(cod_loja: number, cod_cli: number) {
  const pedidoClienteEstabelecimento = await buscarPedidoCliente(cod_loja, cod_cli)
  
  if (pedidoClienteEstabelecimento.length > 0) {
    console.log(pedidoClienteEstabelecimento)
  } else {
    console.log(`Nenhum pedido encontrado para este cliente`)
  }
}

//Buscar todos os estabelecimentos
async function buscarEstabelecimentos() {
  const estabelecimentos = await prisma.estabelecimento.findMany()
  return estabelecimentos;
}

//Chamada6
buscarEstabelecimentos().then(estabelecimentos => {
  console.log(estabelecimentos)
}).catch(e => {
  console.error(e)
}).finally(async () => {
  await prisma.$disconnect()
})

//CREATE
//Criar pedido
async function criarPedido(cod_cli: number, cod_loja: number, itens: {cod_item: number, quantidade: number }[]) {
  try {
    const novopedido = itens.map(item => item.cod_item)
    
    const carrinho = await prisma.item.findMany({
      where: {
        cod: {
          in: novopedido,
        }
      }
    })

    let valorTotal = 0
    itens.forEach(item => {
      const itemBanco = carrinho.find(i => i.cod === item.cod_item)
      if (itemBanco) {
        valorTotal += Number(itemBanco.preco) * item.quantidade
      }
    })
    const novoPedido = await prisma.pedido.create({
      data: {
        cod_cli: cod_cli, 
        cod_loja: cod_loja,
        statusPedido: "Em andamento", 
        tipoPagamento: "PIX", 
        total: valorTotal, 
        item_pedido: {
          create: itens.map(item => ({
            cod_item: item.cod_item,
            quantidade: item.quantidade,
            cod_loja: cod_loja
          }))
        }
      },
      include: {
        item_pedido: true, 
      }
    })

    return novoPedido
  } catch (error) {
    console.error("Erro ao criar pedido:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}
//Criar cliente
async function criarCliente(nome: string, telefone: string, CPF: string) {
  try {
    const novoCliente = await prisma.cliente.create({
      data: {
        nome: nome,
        telefone: telefone,
        CPF: CPF,
      },
    })

    return novoCliente
  } catch (error) {
    console.error("Erro ao criar cliente:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}
//Criar estabelecimento
async function criarEstabelecimento(nome: string, email: string, local: string) {
  try {
    const novoEstabelecimento = await prisma.estabelecimento.create({
      data: {
        nome: nome,
        email: email,
        local: local,
      },
    })

    return novoEstabelecimento
  } catch (error) {
    console.error("Erro ao criar Estabelecimento:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}
//Criar Item
async function criarItem(nome: string, preco: Decimal, tipo: string, descrição: string) {
  try {
    const novoItem = await prisma.item.create({
      data: {
        nome: nome,
        preco: preco,
        tipo: tipo,
        descricao: descrição,
      },
    })

    return novoItem
  } catch (error) {
    console.error("Erro ao criar Item:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

//UPDATE
//Atualizar Pedido
async function atualizarPedido(cod_ped: number, novoStatus: string) {
  try {
    const pedidoAtualizado = await prisma.pedido.update({
      where: {
        cod: cod_ped, 
      },
      data: {
        statusPedido: novoStatus, 
      },
    })

    return pedidoAtualizado
  } catch (error) {
    console.error("Erro ao atualizar o pedido:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}
//Atualizar Item -> preço e descrição
async function atualizarItem(cod_item: number, novoPreco: Decimal, novaDescricao: string) {
  try {
    const itemAtualizado = await prisma.item.update({
      where: {
        cod: cod_item, 
      },
      data: {
        preco: novoPreco, 
        descricao: novaDescricao,
      },
    })

    return itemAtualizado
  } catch (error) {
    console.error("Erro ao atualizar o item:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

//DELETE
//Deletar Item do cardápio
async function deletarItemCardapio(cod_item: number) {
  try {
    const itemDeletado = await prisma.item.delete({
      where: {
        cod: cod_item, 
      },
    })

    return itemDeletado
  } catch (error) {
    console.error("Erro ao deletar item do cardápio:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

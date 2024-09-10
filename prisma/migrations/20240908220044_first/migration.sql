-- CreateTable
CREATE TABLE "Cliente" (
    "cod" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Estabelecimento" (
    "cod" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "cod" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cod_loja" INTEGER NOT NULL,
    CONSTRAINT "Item_cod_loja_fkey" FOREIGN KEY ("cod_loja") REFERENCES "Estabelecimento" ("cod") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pedido" (
    "cod" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "datas" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statusPedido" TEXT NOT NULL,
    "tipoPagamento" TEXT NOT NULL,
    "total" DECIMAL NOT NULL,
    "cod_loja" INTEGER NOT NULL,
    "cod_cli" INTEGER NOT NULL,
    CONSTRAINT "Pedido_cod_loja_fkey" FOREIGN KEY ("cod_loja") REFERENCES "Estabelecimento" ("cod") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pedido_cod_cli_fkey" FOREIGN KEY ("cod_cli") REFERENCES "Cliente" ("cod") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Item_Pedido" (
    "quantidade" INTEGER NOT NULL,
    "cod_ped" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_loja" INTEGER NOT NULL,
    "cod_item" INTEGER NOT NULL,
    CONSTRAINT "Item_Pedido_cod_ped_fkey" FOREIGN KEY ("cod_ped") REFERENCES "Pedido" ("cod") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Item_Pedido_cod_loja_fkey" FOREIGN KEY ("cod_loja") REFERENCES "Estabelecimento" ("cod") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Item_Pedido_cod_item_fkey" FOREIGN KEY ("cod_item") REFERENCES "Item" ("cod") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Estabelecimento_nome_key" ON "Estabelecimento"("nome");

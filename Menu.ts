import readlinesync from "readline-sync";
import { colors } from "./src/util/colors";

export function main() {
  let opcao, numero: number;

  while (true) {
    console.log(colors.bg.black, colors.fg.yellow);

    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                FARMÁCIA BEM-ESTAR                   ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Produto                        ");
    console.log("            2 - Listar todos os Produtos             ");
    console.log("            3 - Buscar tProduto por Id               ");
    console.log("            4 - Atualizar Dados do Produto           ");
    console.log("            5 - Apagar Produto                       ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ", colors.reset);

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong);
        console.log("\n\nCriar Produto\n\n", colors.reset);
        console.log("Digite o Numero da Agência: ");

        keyPress();
        break;
      case 2:
        console.log(colors.fg.whitestrong);
        console.log("\n\nListar todos os Produtos\n\n", colors.reset);
        keyPress();
        break;
      case 3:
        console.log(colors.fg.whitestrong);
        console.log("\n\nConsultar Produtos - por Id\n\n", colors.reset);

        console.log("Digite o Número da Conta: ");
        numero = readlinesync.questionInt("");

        keyPress();
        break;
      case 4:
        console.log(colors.fg.whitestrong);
        console.log("\n\nAtualizar Produto\n\n", colors.reset);

        console.log("Digite o Numero da Conta: ");
        numero = readlinesync.questionInt("");

        keyPress();
        break;
      case 5:
        console.log(colors.fg.whitestrong);
        console.log("\n\nApagar uma Produto\n\n", colors.reset);
        keyPress();
        break;
      default:
        console.log("\nOpção Inválida!\n");
        keyPress();
        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: 3,14R");
  console.log("Generation Brasil - generation@generation.org");
  console.log("github.com/conteudoGeneration");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();

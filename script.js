function calcular() {
    const valor = parseFloat(document.getElementById("valor").value);
    const taxa = parseFloat(document.getElementById("taxa").value) / 100;
    const meses = parseInt(document.getElementById("meses").value);

    // Verificação se os valores são válidos
    if (isNaN(valor) || isNaN(taxa) || isNaN(meses)) {
        document.getElementById("resultado").innerText = "Por favor, preencha os dados corretamente.";
        return;
    }

    // Cálculo do valor final com juros compostos
    const valorFinal = valor * Math.pow(1 + taxa, meses);

    // Formatando o valor final como moeda
    const valorFormatado = valorFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    // Exibindo o resultado
    document.getElementById("resultado").innerText = `Valor final pago: ${valorFormatado}`;
}

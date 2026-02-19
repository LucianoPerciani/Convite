document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 1. Configuração do número
    const meuNumero = "5519999859655"; 

    // 2. Captura dos valores
    const nome = document.getElementById('nome').value;
    const quantidade = document.getElementById('quantidade').value;
    const restricao = document.getElementById('restricao').value || "Nenhuma";

    // 3. Montagem da mensagem
    const mensagem = `Olá! Gostaria de confirmar minha presença no Aniversário do Papai Noel:
- Nome: ${nome}
- Convidados: ${quantidade}
- Restrições: ${restricao}`;

    // 4. Codificação da mensagem para URL
    const mensagemFormatada = encodeURIComponent(mensagem);

    // 5. Criação do link final (Corrigido com crases e a variável correta)
    const urlWhatsApp = `https://wa.me/${meuNumero}?text=${mensagemFormatada}`;

    // 6. Abrir o link
    window.open(urlWhatsApp, '_blank');
});
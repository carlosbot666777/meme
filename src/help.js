const help = (prefix) => {
	return `> *Sticker Commands* <
command : 
de*${prefix}sticker* or *${prefix}stiker*

DONO DO BOT: CARLOS

WhatsApp: https://wa.me/558881321692


desc : converter imagem/gif/ vídeo para adesivo
uso : imagem de resposta/gif/vídeo ou enviar imagem/gif/vídeo com legenda\n

command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo while removendo o fundo
usage : responder imagem ou enviar imagem with rubrica\n

command : *${prefix}toimg*
desc : converter adesivo em imagem
usage : adesivo de resposta\n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
usage : *${prefix}tsticker text in here*\n

> *Meme Commands* <

command : *${prefix}meme*
desc : imagens aleatórias de meme [english]
usage : apenas envie o comando\n
command : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
usage : apenas envie o comando\n
> *Others Commands* <
command : *${prefix}gtts*
desc : converter texto em fala/audio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imagens aleatórias de loli
usage : apenas envie o comando\n
command : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
usage : apenas envie o comando\n
command : *${prefix}url2img*
desc : tirar screenshots da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc : pegue o texto na foto
usage : responder imagem ou enviar imagem with rubrica\n
command : *${prefix}wait*
desc : pesquisar anime with imagem [ What Anime Is This/That ]
usage : reply image, or send image with caption\n
command : *${prefix}setprefix*
desc : substituir prefixo
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n
> *Group Comands* <
command : *${prefix}add*
desc : adicionar membro ao grupo
usage : *${prefix}add 62813xxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}kick*
desc : expulsar membros do grupo
usage : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
comando : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
usage : *${prefix}promote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
comando :
 *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
usage : *${prefix}demote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : apenas envie o comando
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
comando : *${prefix}leave*
desc : Make bot sai do grupo
usage : apenas envie o comando
note : Can só ser usado por Group administradores e Bot owner\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
uso : apenas envie o comando
note : This o comando pode ser usado se você é um administrador de grupo\n
command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help

import { Conection } from "../services/conections";

export async function AdicionarLivros(nm_livro, nm_autor) {
    const comando = 'Insert into (nm_livro, nm_autor) value (?, ?)'
    try{
        const registro = await Conection.query(comando [nm_livro, nm_autor]);
    return registro [0]
    } catch (erro) {
            console.error('Tente novamente');
    }
    
}
import './global.css'
import './styles.css'

import { useForm } from "react-hook-form";

function App() {

	const{register, handleSubmit } = useForm()

	const onSubmitForm = data => fetch("http://localhost:3000/posts", {
		method: "POST",
		body: JSON.stringify({
			data
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		}
	})
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((err) => console.log(err))

	return (
		<div className="app">
			<form onSubmit={handleSubmit(onSubmitForm)}>
				<h1>Criar publicação</h1>

				<div className='field' >
					<label className='label'>Slug</label>
					<input type="text"{...register("slug")} />
				</div>

				<div className='field' >
					<label className='label'>Título</label>
					<input type="text"{...register("title")} />
				</div>

				<div className='field' >
					<label>Descrição</label>
					<input type="text"{...register("description")} />
				</div>

				<div className='field' >
					<label>Conteúdo</label>
					<input type="text"{...register("content")} />
				</div>

				<button type='submit'>PUBLICAR</button>
			</form>
		</div>
	);
}

export default App;

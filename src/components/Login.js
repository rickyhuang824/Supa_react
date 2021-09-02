import {useState} from "react"

export const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();	
	}
	
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<br/>
				<button type="submit">Login</button>
			</form>
		</div>
	)	
}

import { useState } from 'react';

export const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();	
		//sign up logic
		console.log([email, password])
	}
	
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="input-email" name="email">Email</label>
				<input type='email' id="input-email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

				<label htmlFor="input-password" name="password">Password</label>
				<input type='password' id="input-password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
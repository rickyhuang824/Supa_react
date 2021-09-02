import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Paper, Box } from '@material-ui/core';


export const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();	
		//sign up logic
		console.log([email, password])
	}
	
	return (
		<Paper>
			<Box mt={5} display="flex" flexDirection="column" alignItems="center">
				<form onSubmit={handleSubmit}>
					<Box display="flex" flexDirection="column" width='fit-content' mt={5}>
						<Box m={1}>
						<TextField
							name='email'
							variant='outlined'
							label='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						</Box>
						<Box m={1}>
							<TextField
								name = 'password'
								variant='outlined'
								label = 'Password'
								value={email}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Box>
						<Button variant='contained' color='primary' size="small" type="submit">Submit</Button>
					</Box>
				</form>
				< Box mt={2}>
					<Box>
						Already have an account? <Link to="/login">Log In</Link>
					</Box>
				</Box>
			</Box>
		</Paper>
	);
}
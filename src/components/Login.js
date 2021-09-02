import {useState} from "react"
import { useHistory, Link } from "react-router-dom";
import { TextField, Button, Paper, Box } from '@material-ui/core';
import { useAuth } from '../contexts/Auth';


export const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { signIn } = useAuth();
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();	
		const { error } = await signIn({email, password})

		if (error) {
			alert('error signing in');
		} else {
			history.push('/');
		}
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
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Box>
						<Button variant='contained' color='primary' size="small" type="submit">Submit</Button>
					</Box>
				</form>
				< Box mt={2}>
					<Box>
						Don 't have an account?  <Link to="/signup">Sign Up</Link>
					</Box>
				</Box>
			</Box>
		</Paper>
	)	
}

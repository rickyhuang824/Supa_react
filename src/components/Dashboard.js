import { TextField, Button, Typography, Paper, Box } from '@material-ui/core';

export const Dashboard = () => {
	
	const handleSignOut = () => {

	}

	

	return (
		<Paper>
			<Box bgcolor="text.secondary" mt={2} display="flex" flexDirection="column" alignItems="center">
                <Typography m={3} variant='h6'>
                    <Box color="text.primary" m={3}>
                        Welcome
                    </Box>
                </Typography>
				<Box m={3}>
					<Button  variant='contained' color='secondary' size="small" onClick={handleSignOut}>Sign Out</Button>
				</Box>
			</Box>
		</Paper>
	)
}

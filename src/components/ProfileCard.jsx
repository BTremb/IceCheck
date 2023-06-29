

const ProfileCard = ({open}) => {
    const [user, setUser] = useState()

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        setUser(...)
    }, [])

    return(
        <Modal open={open}>
            <Card sx={cardStyle}>
            <div>
                <Typography variant="body1">You are logged in.</Typography>
                {userData && (
                <Box mt={2}>
                    <Typography variant="body2">Email: {userData.email}</Typography>
                    <Typography variant="body2">Username: {userData.userName}</Typography>
                </Box>
                )}
                <Button variant="contained" onClick={() => setIsLoggedIn(false)}>
                Logout
                </Button>
            </div>
            </Card>
        </Modal>
    )
}

export default ProfileCard
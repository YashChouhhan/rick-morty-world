import React, { useState } from 'react';
import {
    Box,
    Grid,
    Grow,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Badge,
    Dialog,
    DialogContent,
    DialogTitle,
    Backdrop,
} from '@mui/material';
import noDataIcon from '../../Assets/no-results.png';
import { useContextProvider } from '../../Context/ContextProvider';

const Cards = () => {
    const { characterData } = useContextProvider();
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleCardClick = (character) => {
        setSelectedCharacter(character);
    };

    const handleClose = () => {
        setSelectedCharacter(null);
    };

    return (
        <Box className="card">
            {characterData.results ? (
                <Grid container spacing={3}>
                    {characterData.results.map((eachCharacter, key) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={eachCharacter.id}>
                            <Grow in={true} timeout={200 * key}>
                                <Card
                                    onClick={() => handleCardClick(eachCharacter)}
                                    sx={{
                                        height: '100%',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                        '&:hover': {
                                            boxShadow: 'rgba(100, 100, 111, 0.4) 0px 7px 29px 0px',
                                        },
                                    }}
                                >
                                    <Badge
                                        color={
                                            eachCharacter.status === 'Alive'
                                                ? 'success'
                                                : eachCharacter.status === 'Dead'
                                                    ? 'error'
                                                    : eachCharacter.status === 'unknown'
                                                        ? 'info'
                                                        : 'default'
                                        }
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        badgeContent={eachCharacter.status}
                                        sx={{
                                            position: 'absolute',
                                            top: 20,
                                            right: 35,
                                        }}
                                    ></Badge>
                                    <CardMedia
                                        component="img"
                                        alt={eachCharacter.name}
                                        height="300"
                                        image={eachCharacter.image}
                                    />
                                    <CardContent sx={{ height: '100%' }}>
                                        <Typography variant="h6" lineHeight="1.2" margin="0px 0px 12px 0px">
                                            {eachCharacter.name}
                                        </Typography>
                                        <Typography className="subtext" variant="subtitle2" paddingBottom="2px">
                                            {eachCharacter.species}
                                        </Typography>
                                        <Typography className="subtext" variant="subtitle2">
                                            {eachCharacter.location.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grow>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box sx={{ textAlign: 'center' }}>
                    <img src={noDataIcon} alt='NoDataIcon' width="50px" />
                    <Typography>No Data Found</Typography>
                </Box>
            )}

            {/* Character Details Popup */}
            <Dialog open={!!selectedCharacter} onClose={handleClose} maxWidth="sm"
                sx={{
                    height: "100%",
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    sx: { backdropFilter: 'blur(5px)' },
                }}
            >
                {selectedCharacter && (
                    <>
                        <DialogTitle
                            sx={{
                                textAlign: 'center',
                                color: 'white',
                                backgroundColor: selectedCharacter.status === 'Alive' ? '#4caf50' :
                                    selectedCharacter.status === 'Dead' ? '#ef5350' :
                                        selectedCharacter.status === 'unknown' ? '#03a9f4' : 'default',
                            }}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', }}>{selectedCharacter.name} ({selectedCharacter.status})</Typography>
                        </DialogTitle>
                        <DialogContent sx={{ padding: '0' }}>
                            <Box>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        alt={selectedCharacter.name}
                                        image={selectedCharacter.image}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography variant='subtitle2'><span className='text-color bold-font'>Species : </span>{selectedCharacter.species}</Typography>
                                    <Typography variant='subtitle2'><span className='text-color bold-font'>Gender : </span>{selectedCharacter.gender}</Typography>
                                    <Typography variant='subtitle2'><span className='text-color bold-font'>Origin : </span>{selectedCharacter.origin.name}</Typography>
                                    <Typography variant='subtitle2'><span className='text-color bold-font'>Appeared In : </span>{selectedCharacter.episode.length} Ep.</Typography>
                                    <Typography variant='subtitle2'><span className='text-color bold-font'>Locaiton : </span>{selectedCharacter.location.name}</Typography>
                                </CardContent>
                            </Box>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default Cards;

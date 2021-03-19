import {makeStyles} from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
    container:{
        backgroundColor:theme.palette.background.paper,
        padding:theme.spacing(8,0,6)
    },
    icon:{
        marginRight:"15px"
    },
    button:{
        margin:"20px"
    },
    cardGrid:{
        marginTop:"30px",
        marginBottom:"30px",
    },
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    },
    image:{
        height:"200px"
    }
}));
export default useStyles;
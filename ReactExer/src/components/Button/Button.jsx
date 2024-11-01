
export default function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        cursor: "pointer",
        borderRadius: 5,
        padding: "10px 20px",
        border: "none",
        marginTop: 20,
        marginBottom: 20,
    

    } 
    return(
        <button style={styles}>Click Me</button>
    ) 
} 
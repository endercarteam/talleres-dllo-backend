const datos = require("./24-taller-04-datos.json");
const express = require("express");

const app = express();
app.use(express.json());
app.get("/users/hobby", (req, res) => {
    const hobby = req.query.hobby;
    if (!hobby) {
        return res.status(400).json({ error: "Debes proporcionar un hobby" });
    }
    const resultado = datos.filter(user => user.hobbies.includes(hobby));
    res.json(resultado);
});
app.get("/users/exists", (req,res) =>{
    const codigo = req.query.codigo; 
    if (!codigo) {
        return res.status(400).json({ error: "Debes proporcionar un código de usuario" });
    }

    const usuarioExiste = datos.some(user => user.codigo === codigo); // Verifica si el usuario existe

    res.json({ exists: usuarioExiste }); 
}
);
app.get("/users/hobby/count", (req,res) => {
    const hobby = req.query.hobby;
    if(!hobby){
        return res.status(400).json({ error: "Debes proporcionar hobby"});
    }
    const hobbyLower = hobby.trim().toLowerCase();

    
    const usuarios_hobby = datos.filter(user => 
        user.hobbies.some(h => h.toLowerCase() === hobbyLower)
    );

    res.json({ usuarios: usuarios_hobby.length });
});
app.get("/users/is-free", (res) =>{
    if (!datos || !Array.isArray(datos)) {
        return res.status(500).json({ error: "No se pudo acceder a los datos." });
    }
    const usuarios_free = datos.filter(user => user.hobbies.length < 3) 
    if(!usuarios_free){
        return res.json({error: "actualmente no hay usuarios con tiempo libre"})
    }
    res.json(usuarios_free)
    
    
});
app.post("/users/suggest", (req,res) => {
    const {codigo, hobby} = req.body;
    
    if (!codigo || !hobby) {
        return res.status(400).json({ error: "Debes proporcionar código y hobby" });
    }
    const usuario = datos.find(user => user.codigo === codigo);
    if (!usuario){
        return res.status(404).json({ error: "Usuario no encontrado" });
    } 
    if (usuario.hobbies.length >= 3){
        return res.status(400).json({ error: "El usuario ya tiene 3 hobbies" })
    } ;
    
    usuario.hobbies.push(hobby);
    

    res.json(usuario); 
})
app.post("/users", (req, res) => {
    const { codigo, nombre, apellido, hobbies } = req.body;

    
    if (!codigo || !nombre || !apellido || !hobbies || !Array.isArray(hobbies) || hobbies.length < 2) {
        return res.status(400).json({ error: "Todos los campos son obligatorios y debe haber al menos dos hobbies" });
    }

    
    const usuarioExiste = datos.some(user => user.codigo === codigo);
    if (usuarioExiste) {
        return res.status(400).json({ error: "El código de usuario ya está registrado" });
    }

    
    const nuevoUsuario = { codigo, nombre, apellido, hobbies };
    datos.push(nuevoUsuario); 

    res.status(201).json({ usuario: nuevoUsuario });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

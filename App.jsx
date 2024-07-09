// import React, { useState } from 'react'

// const App = () => {
//     const [data, setdata] = useState('')
//     const [data2, setdata2] = useState('')
//     const [formvisible, setformvisible] = useState(false);
//     const [todos, setTodos] = useState([]);


//     const visbleform = () => {
//         setformvisible(true)
//     }

//     const fetchdata = (event) => {
//         setdata({ ...data, [event.target.name]: event.target.value })
//     }
//     const submitbutton = () => {
//         setdata2(data)
//     }

// console.log("djdkdodoodo",data2);
//     const editdata = () => {
//         setdata2(data)
//         setdata2(null)

//     }
//     const deletedata = () => {
//         setdata2(null)
//     }

    
//     console.log("djdj", data);
//     return (
//         <>
//             <h1 style={{ display: "flex", justifyContent: "center" }}>Todo-List</h1>

//             <div className='' style={{ display: "flex", justifyContent: "center" }} >
//                 <button onClick={visbleform}>Add todo</button>
//             </div>

//             {formvisible && (
//                 <div className='container'>
//                     <div className='box' style={{ marginTop: '10px' }}>

//                         <label htmlFor="" >Title</label>
//                         <input type="text" style={{ width: "330px", height: "20px", borderColor: 'orange' }} name='title' onChange={fetchdata} /> <br />
//                         <label htmlFor="">Description</label>
//                         <input type="text" style={{ width: "330px", height: "20px", borderColor: 'orange', }} name='description' onChange={fetchdata} />
//                         <div style={{ display: "flex", justifyContent: "center" }} className='mt-5'>
//                             <button style={{
//                                 width: "330px", height: "22px", marginTop: '20px',
//                                 backgroundColor: 'orange', border: "none", height: '20px'
//                             }} onClick={submitbutton}>Submit</button>
//                         </div>

//                         {data2 && (
//                             <div style={{ textAlign: 'center' }}>
//                                 <h3>Submitted Data</h3>
//                                 <div className='box2'>
//                                     <p><strong>Title:</strong> {data2.title}</p>
//                                     <p><strong>Description:</strong> {data2.description}</p>
//                                     <span><button onClick={editdata}>edit</button> <button onClick={deletedata}>delete</button></span>
//                                 </div>
//                             </div>
                           
//                         )}

//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }

// export default App



import React, { useState } from 'react';

const App = () => {
    const [data, setData] = useState({ title: '', description: '' });
    const [formVisible, setFormVisible] = useState(false);
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const visibleForm = () => {
        setFormVisible(true);
    };

    const fetchData = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const submitButton = () => {
        if (editIndex !== null) {
            // Edit existing todo
            const updatedTodos = todos.map((todo, index) => 
                index === editIndex ? data : todo
            );
            setTodos(updatedTodos);
            setEditIndex(null);
        } else {
            // Add new todo
            setTodos([...todos, data]);
        }
        setData({ title: '', description: '' });
        setFormVisible(false);
    };

    const editData = (index) => {
        setData(todos[index]);
        setEditIndex(index);
        setFormVisible(true);
    };

    const deleteData = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>Todo-List</h1>

            <div className='' style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={visibleForm}>Add todo</button>
            </div>

            {formVisible && (
                <div className='container'>
                    <div className='box' style={{ marginTop: '10px' }}>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            style={{ width: "330px", height: "20px", borderColor: 'orange' }}
                            name='title'
                            value={data.title}
                            onChange={fetchData}
                        />
                        <br />
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            style={{ width: "330px", height: "20px", borderColor: 'orange' }}
                            name='description'
                            value={data.description}
                            onChange={fetchData}
                        />
                        <div style={{ display: "flex", justifyContent: "center" }} className='mt-5'>
                            <button
                                style={{
                                    width: "330px",
                                    height: "22px",
                                    marginTop: '20px',
                                    backgroundColor: 'orange',
                                    border: "none",
                                    height: '20px'
                                }}
                                onClick={submitButton}
                            >
                                {editIndex !== null ? 'Update' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

<div style={{ display:'flex', justifyContent:'center', marginTop: '20px' }}>
    <table style={{ border: 'none', borderRadius: '5px' }}>
        <tbody>
            {todos.map((todo, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                    <td style={{ padding: '10px' }}>{todo.title}</td>
                    <td style={{ padding: '10px' }}>{todo.description}</td>
                    <td style={{ padding: '10px' }}>
                        <button style={{ marginRight: '5px' }} onClick={() => editData(index)}>Edit</button>
                        <button onClick={() => deleteData(index)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

        </>
    );
};

export default App;




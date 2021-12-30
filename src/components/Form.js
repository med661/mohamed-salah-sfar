import React ,{useState} from 'react'
import Swal from 'sweetalert2'
 const Form=()=> {



    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState([])


    const viderForm=()=>{
        setLastName('')
        setEmail('')
        setName('')
        setPassword('')
        setPassword2('')

    }
    const validate=(name, email, password,password2)=> {
        
        const errors = [];
      
        if (name.length === 0) {
          errors.push("Name can't be empty");
        }
      
        if (email.length < 5) {
          errors.push("Email should be at least 5 charcters long");
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
          errors.push("Email should contain a @");
        }
        if (email.indexOf(".") === -1) {
          errors.push("Email should contain at least one dot");
        }
        if (password!==password2) {
            errors.push('password is wrong')

        }

        return errors
    }
    const handleSubmit = (e) => {
      
       e.preventDefault();
       const errors = validate(name, email, password,password2);
    if (errors.length > 0) {

        setError(errors)

       
    }
    else{
        Swal.fire(
            'saved',
            'success',
            'success'
          )
          setError([])
       viderForm()
    }
    }

    

    return (
        <div className="project">
             <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <form onSubmit={handleSubmit}>
                    <fieldset>

                    <legend>Technify-IT</legend>
                        <div className="form-group">
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control form-control-lg " placeholder="name" />
                        </div>
                        <div className="form-group">
                            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="form-control form-control-lg" placeholder="last name" />
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-lg" value={email} type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email"/>
                        </div>
                        <div className="form-group">
                        <input className="form-control form-control-lg" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/>
                        </div>
                        <div className="form-group">
                        <input className="form-control form-control-lg"  value={password2} type="password" onChange={(e)=>{setPassword2(e.target.value)}} placeholder="enter password"/>
                        </div> 
                            {error.length >0 ? <div>{error.map((index)=>{
                                return(
                                    <div className="alert alert-danger" role="alert">
                                        {index}
                                    </div>
                                )
                              })}</div>:null}
                        
                        <input type="submit" className="btn btn-primary btn-block mt-4" value="postuler" />
                        </fieldset>
                      
                            
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Form;

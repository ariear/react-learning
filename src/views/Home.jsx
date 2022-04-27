import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import '../Style.css'

function Home() {
    const [count, setCount] = useState(0)
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [ril, setRil] = useState(false)
    const textref = useRef(null)
    const namaRef = useRef(null)
    const [formNama, setFormNama] = useState('Arie')

    useEffect(() => {
      console.log('exec');

      setTimeout(() => {
          textref.current.classList.add('text-yellow-400')
      }, 2000);
      
      ubahNama()
    },[])
    
    const ubahNama = async () => {
        setLoading(true)
        await axios.get('https://random-data-api.com/api/name/random_name')
        .then(response => {
            setName(response.data.name)
            if (response.status === 200) {
                setLoading(false)
            }
        })
    }

    const ketikaDiSubmit = (event) => {
        event.preventDefault()
        const nama = namaRef.current.value
        console.log(`Nama gweh ${nama}`);
        console.log(`Nama gweh based by props ${formNama}`);
        setOpen(false)
    }

    return (
        <div className="font-pupylinux">
            {/* counter */}
            <div className="p-5 mb-3 flex items-center mx-auto w-max">
            <button className="py-2 px-4 rounded-full bg-red-400 text-white" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
            <p className="mx-3 border rounded-lg px-4">{count}</p>
            <button className="py-2 px-4 rounded-full bg-green-400 text-white" onClick={() => setCount(count + 1)}>+</button>
            </div>
            {/* end counter */}

            {/* modal */}
            <div className="w-max mx-auto mb-6">
            <button className="py-2 text-white px-6 font-medium rounded-lg bg-blue-400" onClick={() => setOpen(!open)}>Show</button>
            </div>
            <CSSTransition in={open} timeout={200} unmountOnExit classNames="bgalert">
                <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000004b]" onClick={() => setOpen(false)}></div>
            </CSSTransition>

                <CSSTransition in={open} timeout={200} unmountOnExit classNames="alert">
                <div className="bg-white py-4 px-4 rounded-lg fixed left-0 right-0 bottom-0 top-0 m-auto w-max h-max">
                    <form onSubmit={ketikaDiSubmit}>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="nama" className="mb-2">Nama</label>
                        <input type="text" id="nama" className="border py-2 px-3 rounded-lg" onChange={(e) => console.log(e.target.value)} ref={namaRef} />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="nama" className="mb-2">Nama State</label>
                        <input type="text" id="nama" className="border py-2 px-3 rounded-lg" value={formNama} onChange={(e) => setFormNama(e.target.value)}  />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="mb-2">Password</label>
                        <input type="text" id="password" className="border py-2 px-3 rounded-lg" />
                    </div>
                    <button type="submit" className="py-2 px-6 rounded-lg bg-blue-400 text-white">Kirim</button>
                    </form>
                </div>
                </CSSTransition>
            {/* end modal */}

            <div className="w-max mx-auto bg-purple-400 text-center p-5 rounded-xl mb-6">
            <button className="py-2 px-6 mb-4 text-white rounded-lg bg-green-400" onClick={() => ubahNama()}>Change Name</button>
            {
                loading ? 
                    <p className="text-white">Loading...</p>
                        :
                    <p className="text-white">{name}</p>
            }
            </div>

            <div className="mx-auto w-max mb-4">
            <button onClick={() => setRil(!ril)} className="py-2 px-6 rounded-lg bg-blue-300">Afakah Rill ?</button>
            </div>
            {
                ril ? 
                <div className="bg-orange-300 w-max text-white py-2 px-4 mx-auto rounded-lg">
                    Rill Banh
                </div> : 
                <div className="bg-orange-300 w-max text-white py-2 px-4 mx-auto rounded-lg">
                    Fek Banh
                </div> 
            }
            <p ref={textref} className="text-center mt-2">Mama Aku Di Ubah Oleh UseReff</p>         
        </div>
    )
}

export default Home;
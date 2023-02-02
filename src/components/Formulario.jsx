import { useEffect, useState } from 'react'

const Formulario = ({ setPackages, packages, pack, setPack }) => {
  const styleInput = 'placeholder:text-slate-300 font-bold text-zinc-900 pl-2 rounded-md h-9 border-neutral-400 outline-none transition ease-in-out delay-150 border-2 focus:border-indigo-700'
  const [issuer, setIssuer] = useState('')
  const [recipient, setRecipient] = useState('')
  const [street, setStreet] = useState('')
  const [postal, setPostal] = useState('')
  const [error, setError] = useState(false)
  const [edit, setEdit] = useState(false) // SI ESTA EN TRUE SIGNIFICA QUE SE ESTA EDITANDO Y NO CREANDO UN PACKAGE

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  const handlOnChange = (e) => {
    switch (e.target.id) {
      case 'issuer':
        setIssuer(e.target.value)
        break
      case 'recipient':
        setRecipient(e.target.value)
        break
      case 'street':
        setStreet(e.target.value)
        break
      case 'postal_code':
        setPostal(e.target.value)
        break
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if ([issuer, recipient, street, postal].includes('')) {
      setError(true)
    } else {
      setError(false)
      const objPack = { issuer, recipient, street, postal }
      if (edit) {
        objPack.id = pack.id
        const packagesUpdate = packages.map(packagesState => packagesState.id === objPack.id ? objPack : packagesState)
        console.log(packagesUpdate)
        console.log(objPack)
        setPackages(packagesUpdate)
        setEdit(false)
        setPack({})
      } else {
        objPack.id = generateId()
        setPackages([...packages, objPack])
      }
      setIssuer('')
      setRecipient('')
      setStreet('')
      setPostal('')
    }
  }

  useEffect(() => {
    if (!Object.entries(pack).length) {
      console.log('No esta vacio')
    } else {
      setIssuer(pack.issuer)
      setRecipient(pack.recipient)
      setStreet(pack.street)
      setPostal(pack.postal)
      setEdit(true)
    }
  }, [pack])

  return (
    <div className='w-[31rem]'>
      <h2 className='font-bold text-3xl'>Add new package</h2>
      <form className='bg-slate-50 rounded-xl mt-3 shadow-sm text-neutral-800 px-6 py-6 flex flex-col gap-2' onSubmit={handleOnSubmit}>
        <p className='h-4 font-bold text-red-700 '>  {error && 'Some field is empty'}</p>
        <div className='flex flex-col gap-1'>
          <label className=' mr-4 text-gray-500' htmlFor='issuer'>Issuer name</label>
          <input
            value={issuer}
            onChange={handlOnChange}
            autoComplete='off'
            type='text'
            placeholder='Jonh F kenedy'
            className={styleInput}
            id='issuer'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className=' mr-4 text-gray-300' htmlFor='recipient'>recipient's name</label>
          <input
            value={recipient}
            onChange={handlOnChange}
            autoComplete='off'
            type='text'
            placeholder='Franklin D. Roosevelt'
            className={styleInput}
            id='recipient'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className=' mr-4 text-gray-500' htmlFor='street'>street</label>
          <input
            value={street}
            onChange={handlOnChange}
            autoComplete='off'
            type='text'
            placeholder='Sunset Boulevard.'
            className={styleInput}
            id='street'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className=' mr-4 text-gray-500' htmlFor='postal_code'>Postal Code</label>
          <input
            value={postal}
            onChange={handlOnChange}
            autoComplete='off'
            type='text'
            placeholder='121212'
            className={styleInput}
            id='postal_code'
          />
        </div>
        <input className='rounded-md bg-indigo-700 p-3 font-bold text-white transition-all hover:rounded-[50px] cursor-pointer' type='submit' value={pack.id ? 'Edit Package' : 'Add Package'} />
      </form>
    </div>
  )
}

export default Formulario

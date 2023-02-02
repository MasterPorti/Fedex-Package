import React from 'react'

function ListadoPacientes ({ packages, setPack, setPackages }) {
  return (
    <div className='flex flex-col gap-2 w-[31rem]'>
      <h3 className='font-bold text-3xl'>{packages[0] ? 'Packages in hold' : 'No packages in hold'}</h3>
      <section className='h-[30rem] flex flex-col gap-4 w-[33rem] max-[1120px]:overflow-y-visible overflow-y-scroll'>
        {packages.map((pack, i) => <CardPackage objPack={pack} issuer={pack.issuer} recipient={pack.recipient} packages={packages} street={pack.street} setPackages={setPackages} postal={pack.postal} key={pack.id} setPack={setPack} />)}
      </section>
    </div>
  )
}

const CardPackage = ({ issuer, recipient, street, postal, setPack, objPack, setPackages, packages }) => {
  const delet = () => {
    const packagesUpdate = packages.filter(packOne => packOne.id !== objPack.id)
    setPackages(packagesUpdate)
  }
  return (
    <section className='w-[31rem] bg-slate-50 text-black p-5 rounded-xl'>
      <main className='flex items-center gap-1'>
        <div className='w-[10px] h-[10px] bg-indigo-700 rounded-md' />
        <p>Issuer name <span className='font-bold'>{issuer}</span></p>
      </main>
      <main className='flex items-center gap-1'>
        <div className='w-[10px] h-[10px] bg-indigo-700 rounded-md' />
        <p>Recipient's name <span className='font-bold'>{recipient}</span></p>
      </main>
      <main className='flex items-center gap-1'>
        <div className='w-[10px] h-[10px] bg-indigo-700 rounded-md' />
        <p>Street <span className='font-bold'>{street}</span></p>
      </main>
      <main className='flex items-center gap-1'>
        <div className='w-[10px] h-[10px] bg-indigo-700 rounded-md' />
        <p>Post code <span className='font-bold'>{postal}</span></p>
      </main>
      <div className='flex gap-3'>
        <button className='bg-orange-500 w-[10rem] py-2 font-bold rounded-lg text-zinc-100 mt-2 transition-colors hover:bg-orange-600' onClick={() => setPack(objPack)}>Edit Package</button>
        <button className='bg-red-500 w-[10rem] py-2 font-bold rounded-lg text-zinc-100 mt-2 transition-colors hover:bg-red-600' onClick={delet}>Delete</button>
      </div>
    </section>
  )
}

export default ListadoPacientes

import React from 'react'

const FooterSection = () => {
  return (
    <div>
        <div className="bg-fdf4ef flex justify-between p-36 w-full ">
        <div className="font-bold text-3xl ">ManageWise</div>
        <div>
          <p>Features</p>
          <p>FAQ</p>
          <p>Pricing</p>
        </div>
      </div>
      <footer className="flex justify-between bg-fdf4ef w-full pt-10 pb-10 px-24 border ">
        <div>
          <p>© 2022 ManageWise, Inc.</p>
        </div>
        <div>
          <span>💻</span>
          <span>👨‍💻</span>
          <span>✅</span>
        </div>
      </footer>
    </div>
  )
}

export default FooterSection
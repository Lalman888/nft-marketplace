import { Avatar, WrapItem } from '@chakra-ui/react'
import React,{ useEffect,useState} from 'react'

const Profile = () => {
  const [file, setFile] = useState<any>('')
  let [preview, setPreview] = useState<string>('')

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
    const file = e.target.files[0] || ''
    if (file && file.type.substr(0, 5) === 'image') {
      setPreview(file)
      localStorage.setItem('file', file.name)
    } else {
      setPreview('')
      localStorage.removeItem('file')
    }
    // console.log(file, '', preview)
  }
  

  useEffect(() => {
  preview = localStorage.getItem('file') || '';
  setPreview(preview)
  // console.log(preview)
  }, [file, preview])
  
  
  return (
    <>
        <WrapItem>
              <Avatar
               size='lg'
                name='Prosper Otemuyiwa'
                src={
                  file.name || 'https://bit.ly/prosper-baba'
                }
                     />{' '}
              <input type='file'
                onChange={handleChange}
                accept='image/*'
              />
            
        </WrapItem>
    </>
  )
}

export default Profile

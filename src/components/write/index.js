import React, {useCallback} from 'react'
import './index.css'
import { Container } from 'reactstrap'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Youtube from '@tiptap/extension-youtube'
import Placeholder from '@tiptap/extension-placeholder'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight/lib/core'
import Focus from '@tiptap/extension-focus'
import {Fab, Action} from 'react-tiny-fab'
import { AiOutlinePlus, AiOutlineFileImage, AiOutlineYoutube } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import './styles.scss'

export default function Write() {

  const editor = useEditor({

    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },

    extensions: [
      StarterKit,
      Image,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Youtube.configure({
        controls: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'CodeBlock') {
            return 'What’s the title?'
          }
      
          return 'Write Your Story...'
        },
      }),
      Focus.configure({
        className: 'has-focus',
        mode: 'all',
      }),
     

      
    ],
    content: '<p></p>',
  })


  //Image
  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  if (!editor) {
    return null
  }

  //YT Videos

 

  const addYoutubeVideo = () => {
    const url = prompt('Enter YouTube URL')

    editor.commands.setYoutubeVideo({
      src: url,
      width: 640,
      height: 480,
    })
  }

  return (
    <>
      <div className='writing-area'>
        <Container fluid className='title-area'>
          <input type= "text" placeholder= "Blog Title" className='title-input' autoFocus/>
        </Container>

        <Container fluid >
          
          <div className='body-input'>

            <EditorContent editor={editor} 
              
            />
          </div>

          <Fab
              // mainButtonStyles={mainButtonStyles}
              // actionButtonStyles={actionButtonStyles}
              // style={style}
              icon={<AiOutlinePlus />}
              // event={event}
              alwaysShowTitle={true}
              // onClick={someFunctionForTheMainButton}
            >
             <Action text='add image' onClick={addImage} >
             {<AiOutlineFileImage />}

             </Action>

             <Action text='add video' onClick={addYoutubeVideo}>
             {<AiOutlineYoutube />}
             </Action>
             
             <Action text='add codeblock' onClick={() => editor.chain().focus().setCodeBlock().run()}>
              {< BsCodeSlash/>}
             </Action>
             
            </Fab>
        </Container >
      </div>
    </>
  )
}

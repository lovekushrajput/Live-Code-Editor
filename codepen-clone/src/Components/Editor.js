import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2'


function Editor({ value, onChange, mode }) {

    const handleChange = (editor, data, value) => {
        onChange(value)
    }
    return (
        <div className='width-33'>
            <span>{mode === 'xml' ? 'HTML'.toUpperCase() : mode.toUpperCase()}</span>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='controlled-editor'
                options={{
                    mode: { mode },
                    theme: 'material',
                    lineNumbers: true,
                    autoCloseBrackets: true,
                    autocorrect: true,
                    autoRefresh: true
                }}
            />
        </div>
    )
}

export default Editor
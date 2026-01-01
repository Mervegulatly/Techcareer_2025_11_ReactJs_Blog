// rfce ==> react functional component export

import { Toaster } from 'react-hot-toast';
import React from 'react'

function ReusabilityToast(
    position = "bottom-right",
    duration = 3000,
    message = "This is a toast message",
    type = "info",
    ...props
) {
  return (
    <Toaster
        position = {position}
        toastOptions = {
            {
                duration : duration,
                style : {borderRadius: '10px', padding : '10px'},
                className : `toast-${type}`,
                BodyClassName : 'toast-body',
                success : {
                    icon : '✅'
                },
                error : {
                    icon : '❌'
                },
                info : {
                    icon : 'ℹ️'
                },
                warning : {
                    icon : '⚠️'},
        }}
        {...props}
    />
  )
}

export default ReusabilityToast

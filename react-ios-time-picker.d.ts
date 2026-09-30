declare module 'react-ios-time-picker' {
  import * as React from 'react'

  export interface TimePickerProps {
    value?: string
    onChange?: (value: string) => void
    onSave?: (value: string) => void
    onClose?: () => void
    cellHeight?: number
    placeHolder?: string
    pickerDefaultValue?: string
    disabled?: boolean
    isOpen?: boolean
    required?: boolean
    cancelButtonText?: string
    saveButtonText?: string
    controllers?: boolean
    seperator?: boolean
    id?: string
    name?: string
    use12Hours?: boolean
    inputClassName?: string
    popupClassName?: string
    onAmPmChange?: (value: string) => void
    onFocus?: () => void
    onOpen?: () => void
  }

  export const TimePicker: React.FC<TimePickerProps>
}

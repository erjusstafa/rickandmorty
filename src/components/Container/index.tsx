import React, { useEffect } from 'react'
import { fetchApi } from '../../redux/features/homeSlice'
import { useReduxDispatch } from '../../redux/hooks'
import styles from "./style.module.scss"

const Container  = () => {
const dispatch = useReduxDispatch()

useEffect(() => {
  dispatch(fetchApi)
}, [dispatch])


  return (
    <div  className={styles.WrappContaeiner}>Container</div>
  )
}

export default Container
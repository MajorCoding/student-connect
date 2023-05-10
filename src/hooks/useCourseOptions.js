import { useState, useEffect } from "react"
import axios from "axios"

const useCourseOptions = () => {
  const [courseOptions, setCourseOptions] = useState([{ value: "select", label: "Select" }])

  const fetchData = async (ourRequest) => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_ApiUrl}/all-courses`, {
        cancelToken: ourRequest.token,
      })
      let data = response.data.courses.map((item) => {
        return {
          label: item.course,
          value: item._id,
        }
      })
      setCourseOptions(courseOptions.concat(data))
      localStorage.setItem("courses", JSON.stringify(response.data.courses))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const coursesData = JSON.parse(localStorage.getItem("courses"))
    const ourRequest = axios.CancelToken.source()
    if (coursesData) {
      let data = coursesData.map((item) => {
        return {
          label: item.course,
          value: item._id,
        }
      })
      if (courseOptions.length === 1) {
        setCourseOptions(courseOptions.concat(data))
      }
    } else {
      fetchData(ourRequest)
    }

    return () => {
      ourRequest.cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [courseOptions]
}

export default useCourseOptions

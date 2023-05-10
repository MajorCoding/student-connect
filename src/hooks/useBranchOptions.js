import { useState, useEffect } from "react"
import axios from "axios"

const useBranchOptions = () => {
  const [branchOptions, setBranchOptions] = useState([{ value: "select", label: "Select" }])

  const fetchData = async (ourRequest) => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_ApiUrl}/all-branches`, {
        cancelToken: ourRequest.token,
      })
      let data = response.data.branches.map((item) => {
        return {
          label: item.address,
          value: item._id,
          branchNo: item.no,
        }
      })
      setBranchOptions(branchOptions.concat(data))
      localStorage.setItem("branches", JSON.stringify(response.data.branches))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const branchesData = JSON.parse(localStorage.getItem("branches"))
    const ourRequest = axios.CancelToken.source()
    if (branchesData) {
      let data = branchesData.map((item) => {
        return {
          label: item.address,
          value: item._id,
          branchNo: item.no,
        }
      })
      if (branchOptions.length === 1) {
        setBranchOptions(branchOptions.concat(data))
      }
    } else {
      fetchData(ourRequest)
    }

    return () => {
      ourRequest.cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [branchOptions]
}

export default useBranchOptions

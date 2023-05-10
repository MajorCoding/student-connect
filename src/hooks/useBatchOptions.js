import { useState, useEffect } from "react"
import { getOrdinalValue } from "../utils"
import axios from "axios"

const useBatchOptions = () => {
  const [batchOptions, setBatchOptions] = useState([{ value: "select", label: "Select" }])

  const fetchData = async (ourRequest) => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_ApiUrl}/all-batches`, {
        cancelToken: ourRequest.token,
      })
      let data = response.data.formattedBatches.map((item) => {
        return {
          courseId: item.courseId,
          branchId: item.branchId,
          course: item.course,
          branch: item.branch,
          batchNo: item.batchNo,
          value: item._id,
          label: `${getOrdinalValue(item.batchNo)} • (${item.start} To ${item.end})`,
          timing: `${item.start} To ${item.end}`,
        }
      })
      setBatchOptions(batchOptions.concat(data))
      localStorage.setItem("batches", JSON.stringify(response.data.formattedBatches))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const batchesData = JSON.parse(localStorage.getItem("batches"))
    const ourRequest = axios.CancelToken.source()
    if (batchesData) {
      let data = batchesData.map((item) => {
        return {
          courseId: item.courseId,
          branchId: item.branchId,
          course: item.course,
          branch: item.branch,
          batchNo: item.batchNo,
          value: item._id,
          label: `${getOrdinalValue(item.batchNo)} • (${item.start} To ${item.end})`,
          timing: `${item.start} To ${item.end}`,
        }
      })
      if (batchOptions.length === 1) {
        setBatchOptions(batchOptions.concat(data))
      }
    } else {
      fetchData(ourRequest)
    }

    return () => {
      ourRequest.cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [batchOptions]
}

export default useBatchOptions

import { useState, useEffect } from "react"
import styled from "styled-components/macro"
import CustomSelect from "./CustomSelect"
import useCourseOptions from "../hooks/useCourseOptions"
import useBranchOptions from "../hooks/useBranchOptions"
import useBatchOptions from "../hooks/useBatchOptions"

import color from "../constant/color"

const TimingContent = () => {
  const [courseOptions] = useCourseOptions()
  const [branchOptions] = useBranchOptions()
  const [bacthOptions] = useBatchOptions()
  const [course, setCourse] = useState("")
  const [branch, setBranch] = useState("")
  const [batches, setBatches] = useState([])

  useEffect(() => {
    setBatches(bacthOptions)
  }, [bacthOptions])
  useEffect(() => {
    if (course && branch) {
      let data = bacthOptions.filter((i) => i.courseId === course && i.branchId === branch)
      setBatches(data)
    } else {
      setBatches(bacthOptions)
    }
  }, [course, branch])

  return (
    <Container>
      <h3>Timings</h3>
      <Header>
        <div className="option">
          <CustomSelect
            label="Course"
            value={course}
            options={courseOptions}
            onChange={(item) => setCourse(item.value)}
          />
        </div>
        <div className="option">
          <CustomSelect
            label="Branch"
            value={branch}
            options={branchOptions}
            onChange={(item) => setBranch(item.value)}
          />
        </div>
      </Header>
      <Body>
        <Card>
          <p className="heading">11th</p>
          <div className="header">
            <p>Course</p>
            <p>Batch</p>
            <p>Timing</p>
            {/* <p>Branch</p> */}
          </div>
          <div className="body">
            {batches.map((item) => {
              if (item.value) {
                return (
                  <div className="item">
                    <p>{item.course}</p>
                    <p>{getOrdinalValue(item.batchNo)}</p>
                    <p>{item.timing}</p>
                    {/* <p>{item.branch}</p> */}
                  </div>
                )
              }
            })}
          </div>
        </Card>
      </Body>
    </Container>
  )
}
const getOrdinalValue = (n) => {
  const suffixes = ["th", "st", "nd", "rd"]
  const mod100 = n % 100
  const suffix = suffixes[(mod100 - 20) % 10] || suffixes[mod100] || suffixes[0]
  return n + suffix
}
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */

  h3 {
    font-size: 24px;
    font-weight: 800;
    color: ${color.gray800};
    margin-bottom: 20px;
  }
`

const Header = styled.div`
  display: flex;
  gap: 16px;

  .option {
    min-width: 140px;
  }
`
const Body = styled.div`
  margin-top: 36px;
`
const Card = styled.div`
  .heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: ${color.gray600};
    display: inline-block;
    background: ${color.gray600};
    display: none;

    span {
      padding: 4px 8px;
      font-size: 10px;
      background: ${color.gray600};
      border-radius: 4px;
      color: ${color.gray600};
    }
  }
  .header {
    display: flex;
    gap: 10px;
    border-top: 1px solid ${color.gray200};
    border-bottom: 1px solid ${color.gray200};

    p {
      width: 100px;
      padding: 12px 20px;
      color: ${color.gray600};
      font-weight: 600;
      border-right: 1px solid ${color.gray200};

      :last-child {
        width: 170px;
        border-right: none;
      }
    }
  }

  .body {
    .item {
      display: flex;
      gap: 10px;
      border-bottom: 1px solid ${color.gray200};

      p {
        font-size: 14px;
        width: 100px;
        padding: 16px 20px;
        color: #475569;
        border-right: 1px solid ${color.gray200};

        :last-child {
          width: 170px;
          border-right: none;
        }
      }
    }
  }
`

export default TimingContent

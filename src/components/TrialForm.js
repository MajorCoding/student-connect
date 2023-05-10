import React, { useEffect, useState } from "react"
import styled from "styled-components/macro"
import Input from "./Input"
import color from "../constant/color"
import CustomSelect from "../components/CustomSelect"
import useCourseOptions from "../hooks/useCourseOptions"
import useBranchOptions from "../hooks/useBranchOptions"
import useBatchOptions from "../hooks/useBatchOptions"
import Aos from "aos"
import "aos/dist/aos.css"
import { useImmerReducer } from "use-immer"
import axios from "axios"
import SuccessModal from "./SuccessModal"

const TrialForm = () => {
  const [courseOptions] = useCourseOptions()
  const [branchOptions] = useBranchOptions()
  const [bacthOptions] = useBatchOptions()
  const [filterBatch, setFilterBatch] = useState([])

  const initialState = {
    user: {
      firstName: "",
      lastName: "",
      phone: "",
      courseId: "",
      branchId: "",
      batchId: "",
    },
    errorMsg: "",
    isJoining: false,
    sendCount: 0,
    isSuccessModal: false,
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "updateUser":
        draft.user[action.field] = action.value
        return
      case "errorMsg":
        draft.errorMsg = action.msg
        return
      case "isSuccessModal":
        draft.isSuccessModal = action.value
        return
      case "requestStart":
        draft.isJoining = true
        return
      case "requestEnd":
        draft.isJoining = false
        draft.sendCount = 0
        return
      case "sendCount":
        draft.sendCount = 1
        return
      case "resetValue":
        draft.user.firstName = ""
        draft.user.lastName = ""
        draft.user.phone = ""
        draft.user.courseId = "select"
        draft.user.branchId = "select"
        draft.user.batchId = "select"
        return
      default:
        console.log("Default RUn")
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const updateField = (field, value) => {
    dispatch({ type: "updateUser", field, value })
  }

  useEffect(() => {
    if (state.user.courseId && state.user.branchId) {
      if (state.user.courseId !== "select" && state.user.branchId !== "select") {
        let data = bacthOptions.filter(
          (i) => i.courseId === state.user.courseId && i.branchId === state.user.branchId
        )
        setFilterBatch(data)
      }
    } else {
      setFilterBatch([{ value: "select", label: "Select" }])
    }
    // eslint-disable-next-line
  }, [state.user.courseId, state.user.branchId])

  function hasAllValues(obj) {
    return Object.values(obj).every((val) => Boolean(val))
  }

  const trialRequest = async (ourRequest) => {
    dispatch({ type: "requestStart" })
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_ApiUrl}/trial-student`,
        { trial: state.user },
        { cancelToken: ourRequest.token }
      )
      if (response.data.success) {
        handleModalOpen()
      } else {
        dispatch({ type: "errorMsg", msg: response.data.error })
      }
      dispatch({ type: "requestEnd" })
    } catch (error) {
      console.log("Error: ", error)
      dispatch({ type: "requestEnd" })
    }
  }

  useEffect(() => {
    let ourRequest = axios.CancelToken.source()
    if (state.sendCount) {
      trialRequest(ourRequest)
    }
    // eslint-disable-next-line
  }, [state.sendCount])

  const handleSubmit = () => {
    if (hasAllValues(state.user)) {
      dispatch({ type: "errorMsg", msg: "" })
      dispatch({ type: "sendCount" })
    }
  }

  const handleModalOpen = () => {
    dispatch({ type: "isSuccessModal", value: true })
  }
  const handleModalClose = () => {
    dispatch({ type: "isSuccessModal", value: false })
    setFilterBatch([{ value: "select", label: "Select" }])
    dispatch({ type: "resetValue" })
  }

  return (
    <Container id="join-form" data-aos="fade-left">
      <Row>
        <Input
          type={"text"}
          label="First Name"
          placeholder="name"
          value={state.user.firstName}
          onChange={(e) => updateField("firstName", e.target.value)}
          required
          disabled={state.isJoining}
        />
        <Input
          type={"text"}
          label="Last Name"
          placeholder="surname"
          value={state.user.lastName}
          onChange={(e) => updateField("lastName", e.target.value)}
          required
          disabled={state.isJoining}
        />
      </Row>
      <Row>
        <Input
          type={"tel"}
          icon="ph-phone"
          label="Phone"
          value={state.user.phone}
          maxLength={10}
          placeholder="phone"
          onChange={(e) => updateField("phone", e.target.value)}
          required
          disabled={state.isJoining}
        />
      </Row>
      <Row>
        <CustomSelect
          label="Course"
          options={courseOptions}
          value={state.user.courseId}
          onChange={(item) => updateField("courseId", item.value)}
          required
          isDisabled={state.isJoining}
        />
        <CustomSelect
          label="Branch"
          value={state.user.branchId}
          options={branchOptions}
          onChange={(item) => updateField("branchId", item.value)}
          required
        />
      </Row>
      <Row style={{ marginBottom: "14px" }}>
        <CustomSelect
          label="Batch"
          value={state.user.batchId}
          options={filterBatch}
          onChange={(item) => updateField("batchId", item.value)}
          required
          isDisabled={state.isJoining}
        />
      </Row>
      <Row>
        <Button onClick={handleSubmit} disabled={state.isJoining}>
          {state.isJoining ? "...." : "Sign Up"}
        </Button>
      </Row>
      {state.errorMsg && (
        <Row>
          <p className="error">{state.errorMsg}</p>
        </Row>
      )}
      <SuccessModal isActive={state.isSuccessModal} onClosed={handleModalClose} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  padding: 24px 24px;
  background: #fff;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border: 1px solid ${color.gray200};
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    width: 420px;
    padding: 32px 28px;
    background: #ffffff;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`

const Row = styled.div`
  display: flex;
  gap: 12px;

  p {
    flex: 1;
    font-size: 14px;
    text-align: center;
    padding: 5px 10px;
    color: #dc2626;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 3px;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 14px 20px;
  border-radius: 6px;
  color: #fff;
  background: #1e40af;
  border: none;
  cursor: pointer;
`

export default TrialForm

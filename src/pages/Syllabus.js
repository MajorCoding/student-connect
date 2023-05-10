import React, { useEffect } from "react"
import Page from "../containers/Page"
import Section from "../containers/Section"
import styled from "styled-components"
import color from "../constant/color"
import Aos from "aos"
import "aos/dist/aos.css"
const Syllabus = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Page title="Syllabus">
      <Section>
        <Header>
          <h3>Syllabus</h3>
          <div className="action">
            <button>11th</button>
            <button>12th</button>
            <button>CET</button>
            <button>NEET</button>
          </div>
        </Header>
        <Body>
          <Table data-aos="fade-up">
            <THead>
              <tr>
                <th>Unit No.</th>
                <th>Name of Unit</th>
                <th>No. of Periods</th>
                <th>Marks</th>
              </tr>
            </THead>
            <TBody>
              <tr className="head">
                <td rowSpan={3}>Unite-I</td>
                <td>Physical World and Measurement</td>
                <td rowSpan={3}>6</td>
                <td rowSpan={10}>20</td>
              </tr>
              <tr className="chapters">
                <td>Chapter-1: Physical World</td>
              </tr>
              <tr className="chapters">
                <td>hapter-2: Units and Measurements</td>
              </tr>
              <tr className="dividerTop"></tr>
              <tr className="dividerBottom"></tr>
              <tr className="head">
                <td rowSpan={3}>Unit-II</td>
                <td>Kinematics</td>
                <td rowSpan={3}>16</td>
              </tr>
              <tr className="chapters">
                <td>Chapter-3: Motion in a Straight Line</td>
              </tr>
              <tr className="chapters">
                <td>Chapter-4: Motion in a Plane</td>
              </tr>
              <tr className="dividerTop"></tr>
              <tr className="dividerBottom"></tr>
              <tr className="head">
                <td rowSpan={2}>Unit-III</td>
                <td>Laws of Motion</td>
                <td rowSpan={2}>10</td>
              </tr>
              <tr className="chapters">
                <td>Chapter-5: Laws of Motion</td>
              </tr>
              {/* New */}
              <tr className="dividerTop"></tr>
              <tr className="dividerBottom"></tr>
              <tr className="head">
                <td rowSpan={2}>Unit-IV</td>
                <td>Work, Energy and Power</td>
                <td rowSpan={2}>12</td>
                <td rowSpan={8}>15</td>
              </tr>
              <tr className="chapters">
                <td>Chapter-6: Work, Energy and Power</td>
              </tr>
              <tr className="dividerTop"></tr>
              <tr className="dividerBottom"></tr>
              <tr className="head">
                <td rowSpan={2}>Unit-V</td>
                <td>Motion of System of Particles and Rigid Body</td>
                <td rowSpan={2}>16</td>
              </tr>
              <tr className="chapters">
                <td>Chapter-7: System of Particles and Rotational Motion</td>
              </tr>
              <tr className="dividerTop"></tr>
              <tr className="dividerBottom"></tr>
              <tr className="head">
                <td rowSpan={3}>Unit-VI</td>
                <td>Gravitation</td>
                <td rowSpan={2}>8</td>
              </tr>
              <tr className="chapters">
                <td>Chapter-8: Gravitation</td>
              </tr>
              <tr className="dividerTop"></tr>
              <tr className="dividerBottom"></tr>
              <tr className="head">
                <td></td>
                <td>Total</td>
                <td>68</td>
                <td>35</td>
              </tr>
              <tr className="dividerTop"></tr>
              <tr className="dividerBottom"></tr>
            </TBody>
          </Table>
        </Body>
      </Section>
    </Page>
  )
}

const Header = styled.div`
  h3 {
    font-size: 24px;
    color: ${color.gray800};
    margin-bottom: 18px;
  }

  .action {
    display: flex;
    gap: 14px;

    button {
      display: inline-block;
      font-size: 14px;
      padding: 12px 24px;
      background: #fff;
      color: ${color.gray600};
      border: 1px solid ${color.gray300};
      border-radius: 6px;
      cursor: pointer;

      :first-child {
        color: #fff;
        font-weight: 500;
        background: ${color.primary};
      }
    }
  }
`

const Body = styled.div`
  width: 100%;
  overflow-x: scroll;
  margin-top: 26px;
`

export const Divider = styled.div`
  margin: 16px 0;
  width: 100%;
  height: 2px;
  background: #e2e8f0;
`

export const Table = styled.table`
  width: 100%;
  height: auto;
  border-collapse: collapse;
`

export const THead = styled.thead`
  text-align: left;

  & tr {
    border-top: 2px solid #e2e8f0;
    border-bottom: 2px solid #e2e8f0;

    th {
      font-size: 16px;
      font-weight: 600;
      color: #1e3a8a;
      padding: 16px 18px;

      :nth-child(1) {
        min-width: 100px;
      }
      :nth-child(2) {
        min-width: 400px;
      }

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }
`

export const TBody = styled.tbody`
  & tr {
    :first-child {
      td {
        padding-top: 16px;
      }
    }
    td {
      font-size: 14px;
      color: #64748b;
      padding: 8px 18px;
      @media (min-width: 768px) {
        font-size: 16px;
      }
      :nth-child(3) {
        border-left: 1px solid #e2e8f0;
        border-right: 1px solid #e2e8f0;
      }
    }
  }
  .head {
    td {
      font-weight: 500;
      color: #334155;
      vertical-align: top;
    }
  }

  .dividerTop {
    height: 12px;
    border-bottom: 1px solid #e2e8f0;
  }
  .dividerBottom {
    height: 12px;
  }

  hr {
    width: 100%;
  }
`

export default Syllabus

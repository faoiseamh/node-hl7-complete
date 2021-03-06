{
  "ORU_R01": {
    "MSH": [{
      "MSH.1": ["|"],
      "MSH.2": ["^~\\&"],
      "MSH.3": [{
        "HD.1": ["EHR Application"],
        "HD.2": ["2.16.840.1.113883.3.72.7.1"],
        "HD.3": ["HL7"]
      }],
      "MSH.4": [{
        "HD.1": ["EHR Facility"],
        "HD.2": ["2.16.840.1.113883.3.72.7.2"],
        "HD.3": ["HL7"]
      }],
      "MSH.5": [{
        "HD.1": ["PH Application"],
        "HD.2": ["2.16.840.1.113883.3.72.7.3"],
        "HD.3": ["HL7"]
      }],
      "MSH.6": [{
        "HD.1": ["PH Facility"],
        "HD.2": ["2.16.840.1.113883.3.72.7.4"],
        "HD.3": ["HL7"]
      }],
      "MSH.7": [{
        "TS.1": ["20100929111016"]
      }],
      "MSH.9": [{
        "MSG.1": ["ORU"],
        "MSG.2": ["R01"],
        "MSG.3": ["ORU_R01"]
      }],
      "MSH.10": ["NIST-100929111015653"],
      "MSH.11": [{
        "PT.1": ["P"]
      }],
      "MSH.12": [{
        "VID.1": ["2.5.1"]
      }],
      "MSH.21": [{
        "EI.1": ["PHLabReport-Ack"],
        "EI.3": ["2.16.840.1.114222.4.10.3"],
        "EI.4": ["ISO"]
      }]
    }],
    "SFT": [{
      "SFT.1": [{
        "XON.1": ["NIST Lab, Inc."]
      }],
      "SFT.2": ["3.6.23"],
      "SFT.3": ["A-1 Lab System"],
      "SFT.4": ["6742873-12"],
      "SFT.6": [{
        "TS.1": ["20080303"]
      }]
    }],
    "ORU_R01.PATIENT_RESULT": [{
      "ORU_R01.PATIENT": [{
        "PID": [{
          "PID.3": [{
            "CX.1": ["987488015"],
            "CX.4": [{
              "HD.1": ["MPI"],
              "HD.2": ["2.16.840.1.113883.19.3.2.1"],
              "HD.3": ["ISO"]
            }],
            "CX.5": ["MR"]
          }],
          "PID.5": [{
            "XPN.1": [{
              "FN.1": ["Whiteagle"]
            }],
            "XPN.2": ["Adam"]
          }],
          "PID.7": [{
            "TS.1": ["19800321"]
          }],
          "PID.8": ["M"],
          "PID.10": [{
            "CE.1": ["1002-5"],
            "CE.2": ["American Indian or Alaska Native"],
            "CE.3": ["HL70005"]
          }],
          "PID.11": [{
            "XAD.1": [{
              "SAD.1": ["354 Glacier Road"]
            }],
            "XAD.3": ["Anchorage"],
            "XAD.4": ["Alaska"],
            "XAD.5": ["99505"],
            "XAD.6": ["USA"],
            "XAD.7": ["M"]
          }],
          "PID.13": [{
            "XTN.2": ["PRN"],
            "XTN.6": ["907"],
            "XTN.7": ["7552189"]
          }],
          "PID.22": [{
            "CE.1": ["N"],
            "CE.2": ["Not Hispanic or Latino"],
            "CE.3": ["HL70189"]
          }]
        }]
      }],
      "ORU_R01.ORDER_OBSERVATION": [{
        "ORC": [{
          "ORC.1": ["RE"],
          "ORC.21": [{
            "XON.1": ["Level Seven Healthcare"],
            "XON.2": ["L"],
            "XON.6": [{
              "HD.1": ["ABC Medical Center"],
              "HD.2": ["2.16.840.1.113883.19.4.6"],
              "HD.3": ["ISO"]
            }],
            "XON.7": ["XX"],
            "XON.10": ["1234"]
          }],
          "ORC.22": [{
            "XAD.1": [{
              "SAD.1": ["1005 Healthcare Drive"]
            }],
            "XAD.3": ["Ann Arbor"],
            "XAD.4": ["MI"],
            "XAD.5": ["48103"],
            "XAD.7": ["B"]
          }],
          "ORC.23": [{
            "XTN.6": ["734"],
            "XTN.7": ["5553001"]
          }]
        }],
        "OBR": [{
          "OBR.1": ["1"],
          "OBR.3": [{
            "EI.1": ["2233817"],
            "EI.2": ["Lab"],
            "EI.3": ["2.16.840.1.113883.19.3.1.6"],
            "EI.4": ["ISO"]
          }],
          "OBR.4": [{
            "CE.1": ["625-4"],
            "CE.2": ["Stool culture"],
            "CE.3": ["LN"],
            "CE.4": ["8835327"],
            "CE.5": ["Stool Culture Test"],
            "CE.6": ["99USI"]
          }],
          "OBR.7": [{
            "TS.1": ["201007261100"]
          }],
          "OBR.13": ["Diarrhea X 4 days"],
          "OBR.22": [{
            "TS.1": ["201007291500"]
          }],
          "OBR.25": ["F"],
          "OBR.31": [{
            "CE.1": ["787.91"],
            "CE.2": ["DIARRHEA"],
            "CE.3": ["I9CDX"]
          }]
        }],
        "ORU_R01.OBSERVATION": [{
          "OBX": [{
            "OBX.1": ["1"],
            "OBX.2": ["ST"],
            "OBX.3": [{
              "CE.1": ["6331-3"],
              "CE.2": ["Campylobacter Jejuni AB"],
              "CE.3": ["LN"]
            }],
            "OBX.4": ["1"],
            "OBX.5": ["Isolated"],
            "OBX.11": ["F"],
            "OBX.14": [{
              "TS.1": ["201007261100"]
            }],
            "OBX.19": [{
              "TS.1": ["201007291500"]
            }],
            "OBX.23": [{
              "XON.1": ["Lab"],
              "XON.2": ["L"],
              "XON.6": [{
                "HD.1": ["CLIA"],
                "HD.2": ["2.16.840.1.113883.19.4.6"],
                "HD.3": ["ISO"]
              }],
              "XON.7": ["XX"],
              "XON.10": ["1236"]
            }],
            "OBX.24": [{
              "XAD.1": [{
                "SAD.1": ["3434 Industrial Lane"]
              }],
              "XAD.3": ["Ann Arbor"],
              "XAD.4": ["MI"],
              "XAD.5": ["48103"],
              "XAD.7": ["B"]
            }]
          }]
        }, {
          "OBX": [{
            "OBX.1": ["1"],
            "OBX.2": ["ST"],
            "OBX.3": [{
              "CE.1": ["20995-1"],
              "CE.2": ["Salmonella"],
              "CE.3": ["LN"]
            }],
            "OBX.4": ["1"],
            "OBX.5": ["Isolated"],
            "OBX.11": ["F"],
            "OBX.14": [{
              "TS.1": ["201007261100"]
            }],
            "OBX.19": [{
              "TS.1": ["201007291500"]
            }],
            "OBX.23": [{
              "XON.1": ["Lab"],
              "XON.2": ["L"],
              "XON.6": [{
                "HD.1": ["CLIA"],
                "HD.2": ["2.16.840.1.113883.19.4.6"],
                "HD.3": ["ISO"]
              }],
              "XON.7": ["XX"],
              "XON.10": ["1236"]
            }],
            "OBX.24": [{
              "XAD.1": [{
                "SAD.1": ["3434 Industrial Lane"]
              }],
              "XAD.3": ["Ann Arbor"],
              "XAD.4": ["MI"],
              "XAD.5": ["48103"],
              "XAD.7": ["B"]
            }]
          }]
        }, {
          "OBX": [{
            "OBX.1": ["1"],
            "OBX.2": ["ST"],
            "OBX.3": [{
              "CE.1": ["17576-0"],
              "CE.2": ["Shigella"],
              "CE.3": ["LN"]
            }],
            "OBX.4": ["1"],
            "OBX.5": ["Not Isolated"],
            "OBX.11": ["F"],
            "OBX.14": [{
              "TS.1": ["201007261100"]
            }],
            "OBX.19": [{
              "TS.1": ["201007291500"]
            }],
            "OBX.23": [{
              "XON.1": ["Lab"],
              "XON.2": ["L"],
              "XON.6": [{
                "HD.1": ["CLIA"],
                "HD.2": ["2.16.840.1.113883.19.4.6"],
                "HD.3": ["ISO"]
              }],
              "XON.7": ["XX"],
              "XON.10": ["1236"]
            }],
            "OBX.24": [{
              "XAD.1": [{
                "SAD.1": ["3434 Industrial Lane"]
              }],
              "XAD.3": ["Ann Arbor"],
              "XAD.4": ["MI"],
              "XAD.5": ["48103"],
              "XAD.7": ["B"]
            }]
          }]
        }],
        "ORU_R01.SPECIMEN": [{
          "SPM": [{
            "SPM.4": [{
              "CWE.1": ["252393000"],
              "CWE.2": ["Stool specimen"],
              "CWE.3": ["SCT"],
              "CWE.4": ["STL"],
              "CWE.5": ["Stool"],
              "CWE.6": ["HL70070"],
              "CWE.7": ["20080131"],
              "CWE.8": ["2.5.1"]
            }]
          }]
        }]
      }]
    }]
  }
}

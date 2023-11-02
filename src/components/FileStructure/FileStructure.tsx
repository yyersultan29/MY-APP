import { useState } from "react"

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";

import { initialData } from "./constants"
import { FileType, IFile } from "./types";
import FolderIcon from '@mui/icons-material/Folder';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FileStructure = () => {

  const [treeData, setTreeData] = useState<IFile[]>(initialData);

  const handleEdit = (fileName: string, type: FileType) => {

    const text = window.prompt();
    const copy = [...treeData];

    const helper = (treeData: IFile[]) => {
      for (let i = 0; i < treeData.length; i++) {
        const data = treeData[i];
        if (data.name === fileName && data.type === type) {
          treeData[i] = { ...treeData[i], name: text ?? "" }
          break;
        } else {
          data.children && helper(data.children);
        }
      }
      return treeData;
    }

    setTreeData(helper(copy));
  }

  const handleDelete = (fileName: string, type: FileType) => {

    const copy = [...treeData];

    const helper = (treeData: IFile[]) => {
      for (let i = 0; i < treeData.length; i++) {
        const data = treeData[i];
        if (data.name === fileName && data.type === type) {
          treeData.splice(i, 1);
          break;
        } else {
          data.children && helper(data.children);
        }
      }
      return treeData;
    }

    setTreeData(helper(copy));

  }

  const renderData = (treeData: IFile[]) => {
    return treeData.map(data => {
      return (
        <Box key={data.name} width={"100%"}>
          <Box width="100%">
            <Accordion sx={{ border: "none", outline: "none" }}>
              {/* Parent */}
              <AccordionSummary
                sx={{ border: 0, outline: "none" }}
                expandIcon={data.type === "folder" ? <ExpandMoreIcon /> : null}
              >
                <Box
                  p="5px"
                  width="100%"
                  display="flex"
                  alignSelf="end"
                  justifyContent="space-between"
                  sx={{ ":hover": { backgroundColor: "silver" } }}
                >
                  <Box width="100%" display="flex">

                    {data.type === "folder" ?
                      <FolderIcon color="warning" /> :
                      <ArticleIcon color="action" />}

                    <Typography>{data.name} </Typography>
                  </Box>
                  <Box display="flex" gap="7px">
                    <EditIcon
                      sx={{ cursor: "pointer" }}
                      fontSize="small"
                      color="action"
                      onClick={() => handleEdit(data.name, data.type)}
                    />

                    <DeleteIcon
                      sx={{ cursor: "pointer" }}
                      fontSize="small"
                      color="action"
                      onClick={() => handleDelete(data.name, data.type)}
                    />
                  </Box>

                </Box>
              </AccordionSummary>


              {/* Child render */}
              {data.children ? <AccordionDetails sx={{ border: 0, outline: "none" }}>
                <Box ml="20px">
                  {renderData(data.children)}
                </Box>
              </AccordionDetails> : null}

            </Accordion>



          </Box>
        </Box>
      )
    })
  }

  return (

    <Box width={400} p="10px">
      {renderData(treeData)}
    </Box>

  )
}
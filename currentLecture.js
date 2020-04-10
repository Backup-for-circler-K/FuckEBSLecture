function postToEBS (lctreSn) {
  const atnlcNo = $('#atnlcNo').val()
  const lctreSeCode = $('#lctreSeCode').val()
  const stepSn = $('#stepSn').val()
  const cntntsTyCode = $('#cntntsTyCode').val()
  const revivTime = $('#revivTime').val()

  const postData = {}
  postData.atnlcNo = atnlcNo
  postData.lctreSn = lctreSn
  postData.stepSn = stepSn
  postData.lctreSeCode = lctreSeCode
  postData.cntntsTyCode = cntntsTyCode
  postData.revivTime = revivTime
  postData.endButtonYn = 'Y'
  postData.lastRevivLc = revivTime

  postData.lrnTime = revivTime

  fncPost('/mypage/userlrn/lctreLrnSave.do', postData, () => {
    console.log('Success: ' + lctreSn)
  })
}
postToEBS(Number($('#lctreSn').val()))

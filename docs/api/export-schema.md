# 导出结构

这部分根据 `content.js` 和 `background.js` 里的真实输出结构整理。

## 公共导出包结构

页面内导出目前统一通过 `buildExport(kind, records, extra)` 构造，基础结构是：

```json
{
  "kind": "homeworks",
  "generated_at": "2026-04-25T09:00:00.000Z",
  "page_url": "https://...",
  "page_title": "页面标题",
  "frame_url": "https://...",
  "frame_title": "frame 标题",
  "record_count": 12,
  "records": [],
  "extra": {}
}
```

## `courses` 记录

课程记录当前主要字段包括：

- `course_name`
- `title`
- `course_id`
- `class_id`
- `url`

## `homeworks` 记录

作业记录当前主要字段包括：

- `course_id`
- `class_id`
- `work_id`
- `homework_name`
- `name`
- `class_name`
- `answer_time`
- `pending_count`
- `submitted_count`
- `unsubmitted_count`
- `url`

## `submissions` 记录

提交记录当前主要字段包括：

- `course_id`
- `class_id`
- `work_id`
- `answer_id`
- `workAnswerId`
- `homework_name`
- `student_name`
- `student_id`
- `submit_time`
- `ip_address`
- `status`
- `reviewer`
- `grade`
- `url`

## `questions` 记录

题目记录是 AI 批阅最核心的数据输入，当前字段包括：

- `course_id`
- `class_id`
- `homework_id`
- `work_id`
- `workAnswerId`
- `answer_id`
- `cpi`
- `source_url`
- `q_content`
- `q_images`
- `correct_image`
- `correct_images`
- `correct_text`
- `student_answer_text`
- `student_answer_images`
- `question_score`
- `question_hash_id`

## 自动抓取快照结构

后台自动抓取还会额外生成一个聚合快照，主要结构大致是：

```json
{
  "timestamp": "2026-04-25T09:00:00.000Z",
  "status": "running",
  "stage": "loading_homework_submissions",
  "source": "login-auto-crawl",
  "context": {
    "source_tab_id": 0,
    "crawl_tab_id": 0,
    "crawl_window_id": 0,
    "current_course": {},
    "current_homework": {},
    "remaining_course_count": 0,
    "remaining_homework_count": 0,
    "crawled_course_count": 0,
    "crawled_homework_count": 0,
    "crawled_submission_count": 0,
    "course_progress": [],
    "errors": [],
    "error_message": ""
  },
  "courses": {},
  "homeworks": {},
  "submissions": {}
}
```

## `course_progress` 里的典型字段

课程进度项当前包含这些关键字段：

- `course_name`
- `course_id`
- `class_id`
- `url`
- `status`
- `stage`
- `homework_count`
- `homework_done_count`
- `skipped_homework_count`
- `submission_count`
- `current_homework_name`
- `last_error`
- `updated_at`

## 批阅结果标准化输出

AI 返回结果在页面内会被标准化成：

```json
{
  "grading_score": 8,
  "grading_comment": "AI 已完成批阅"
}
```

如果模型返回里存在 `score`、`comment`、`reason` 这类别名字段，页面逻辑也会尝试兼容并归一化。
